import { Keyword } from '@/entities/keyword.entity';
import { Region } from '@/entities/regions.entity';
import { Set } from '@/entities/sets.enity';
import { VocabTerm } from '@/entities/vocabTerms.entity';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import decompress from 'decompress';
import { createWriteStream, existsSync, rmSync, unlinkSync } from 'fs';
import cliProgress from 'cli-progress';
import { Card } from '@/entities/card.entity';

@Injectable()
export class SystemService {
    constructor(private readonly httpService: HttpService) {}

    async syncData() {
        console.time('sync');
        const data = [
            { set: 'set1', setName: 'Set 1' },
            { set: 'set2', setName: 'Set 2' },
            { set: 'set3', setName: 'Set 3' },
            { set: 'set4', setName: 'Set 4' },
            { set: 'set5', setName: 'Set 5' },
            { set: 'set6', setName: 'Set 6' },
            { set: 'set6cde', setName: 'Set 6cde' },
            { set: 'set7', setName: 'Set 7' },
            { set: 'set7b', setName: 'Set 7b' },
            { set: 'set8', setName: 'Set 8' },
        ];

        let res = {};
        const core = await this.syncCoreData();
        res = Object.assign(res, core);
        for (const iterator of data) {
            const sync = await this.syncSetData(iterator.set, iterator.setName);
            res = Object.assign(res, sync);
        }

        console.timeEnd('sync');
        return res;
    }

    async syncCoreData() {
        if (!existsSync('core.zip')) {
            const writer = createWriteStream('core.zip');

            const core = await this.httpService.axiosRef.get(
                'https://dd.b.pvp.net/latest/core-vi_vn.zip',
                {
                    responseType: 'stream',
                },
            );
            const progressBar = new cliProgress.SingleBar(
                {
                    format: 'Download Core Data {bar} {percentage}% |',
                },
                cliProgress.Presets.shades_classic,
            );
            let receivedBytes = 0;
            const stream = core.data;
            progressBar.start(core.headers['content-length'], 0);
            stream.on('data', (chunk: any) => {
                receivedBytes += chunk.length;
                progressBar.update(receivedBytes);
            });
            stream.pipe(writer);
            await new Promise((resolve, reject) => {
                writer.on('finish', () => {
                    progressBar.stop();
                    resolve(true);
                });
                writer.on('error', () => {
                    unlinkSync('core.zip');
                    progressBar.stop();
                    reject();
                });
            });
        }

        if (!existsSync('temp/core')) {
            await decompress('core.zip', 'temp/core');
        }
        if (existsSync('temp/core') && existsSync('core.zip')) {
            const globalData = require('../../temp/core/vi_vn/data/globals-vi_vn.json');

            await Promise.all([
                VocabTerm.update(
                    {
                        active: false,
                    },
                    { where: {} },
                ),
                Keyword.update(
                    {
                        active: false,
                    },
                    { where: {} },
                ),
                Region.update(
                    {
                        active: false,
                    },
                    { where: {} },
                ),
                Set.update(
                    {
                        active: false,
                    },
                    { where: {} },
                ),
            ]);
            const progressBar = new cliProgress.SingleBar(
                {
                    format: 'Sync Core Data {bar} {percentage}% | {value}/{total}',
                },
                cliProgress.Presets.shades_classic,
            );
            progressBar.start(
                globalData.vocabTerms.length +
                    globalData.keywords.length +
                    globalData.regions.length +
                    globalData.sets.length,
                0,
            );

            const vocabTerms = globalData.vocabTerms.map(async function (
                itor: any,
            ) {
                return VocabTerm.findOrCreate({
                    where: {
                        nameRef: itor.nameRef,
                    },
                    defaults: itor,
                }).then(([data, isNew]) => {
                    progressBar.increment();
                    if (!isNew) {
                        return data.update({ active: true });
                    }
                });
            });
            const keywords = globalData.keywords.map(async function (
                itor: any,
            ) {
                return Keyword.findOrCreate({
                    where: {
                        nameRef: itor.nameRef,
                    },
                    defaults: itor,
                }).then(([data, isNew]) => {
                    progressBar.increment();
                    if (!isNew) {
                        return data.update({ active: true });
                    }
                });
            });
            const regions = globalData.regions.map(async function (itor: any) {
                return Region.findOrCreate({
                    where: {
                        nameRef: itor.nameRef,
                    },
                    defaults: itor,
                }).then(([data, isNew]) => {
                    progressBar.increment();
                    if (!isNew) {
                        return data.update({ active: true });
                    }
                });
            });
            const sets = globalData.sets.map(async function (itor: any) {
                itor.iconAbsolutePath = itor.iconAbsolutePath.replace(
                    '_crispmip',
                    '',
                );

                return Set.findOrCreate({
                    where: {
                        nameRef: itor.nameRef,
                    },
                    defaults: itor,
                }).then(([data, isNew]) => {
                    progressBar.increment();
                    if (!isNew) {
                        return data.update({ active: true });
                    }
                });
            });
            await Promise.all([
                ...vocabTerms,
                ...keywords,
                ...regions,
                ...sets,
            ]);
            progressBar.stop();
            await Promise.all([
                rmSync('temp/core', { recursive: true }),
                rmSync('core.zip'),
            ]);
        }

        return { core: true };
    }

    async syncSetData(set: string, setName: string) {
        const filename = `${set}.zip`;
        if (!existsSync(filename)) {
            const writer = createWriteStream(filename);

            const file = await this.httpService.axiosRef.get(
                `https://dd.b.pvp.net/latest/${set}-vi_vn.zip`,
                {
                    responseType: 'stream',
                },
            );
            const progressBar = new cliProgress.SingleBar(
                {
                    format: `Download ${setName} Data {bar} {percentage}% |`,
                },
                cliProgress.Presets.shades_classic,
            );
            let receivedBytes = 0;
            const stream = file.data;
            progressBar.start(file.headers['content-length'], 0);
            stream.on('data', (chunk: any) => {
                receivedBytes += chunk.length;
                progressBar.update(receivedBytes);
            });
            stream.pipe(writer);
            await new Promise((resolve, reject) => {
                writer.on('finish', () => {
                    progressBar.stop();
                    resolve(true);
                });
                writer.on('error', () => {
                    unlinkSync(filename);
                    progressBar.stop();
                    reject();
                });
            });
        }

        const foldername = `temp/${set}`;
        if (!existsSync(foldername)) {
            await decompress(filename, foldername);
        }
        if (existsSync(foldername) && existsSync(filename)) {
            const data = require(`../../temp/${set}/vi_vn/data/${set}-vi_vn.json`);

            await Card.update(
                {
                    active: false,
                },
                {
                    where: {
                        gameSet: setName.replace(' ', ''),
                    },
                },
            );
            const progressBar = new cliProgress.SingleBar(
                {
                    format: `Sync ${setName} Data {bar} {percentage}% | {value}/{total}`,
                },
                cliProgress.Presets.shades_classic,
            );
            progressBar.start(data.length, 0);

            const card = data.map(async function (itor: any) {
                return Card.findOrCreate({
                    where: {
                        cardCode: itor.cardCode,
                    },
                    defaults: {
                        cardCode: itor.cardCode,
                        name: itor.name,
                        type: itor.type,
                        subtypes: itor.subtypes,
                        gameAbsolutePath:
                            itor.assets[0]?.gameAbsolutePath || null,
                        fullAbsolutePath:
                            itor.assets[0]?.fullAbsolutePath || null,
                        regionRefs: itor.regionRefs,
                        attack: itor.attack,
                        health: itor.health,
                        cost: itor.cost,
                        description: itor.description,
                        descriptionRaw: itor.descriptionRaw,
                        levelupDescription: itor.levelupDescription,
                        levelupDescriptionRaw: itor.levelupDescriptionRaw,
                        keywordRefs: itor.keywordRefs,
                        spellSpeedRef: itor.spellSpeedRef,
                        rarityRef: itor.rarityRef,
                        collectible: itor.collectible,
                        gameSet: itor.set,
                        formatRefs: itor.formatRefs,
                        flavorText: itor.flavorText,
                        associatedCardRefs: itor.associatedCardRefs,
                    },
                }).then(([data, isNew]) => {
                    progressBar.increment();
                    if (!isNew) {
                        return data.update({
                            cardCode: itor.cardCode,
                            name: itor.name,
                            type: itor.type,
                            subtypes: itor.subtypes,
                            gameAbsolutePath:
                                itor.assets[0]?.gameAbsolutePath || null,
                            fullAbsolutePath:
                                itor.assets[0]?.fullAbsolutePath || null,
                            regionRefs: itor.regionRefs,
                            attack: itor.attack,
                            health: itor.health,
                            cost: itor.cost,
                            description: itor.description,
                            descriptionRaw: itor.descriptionRaw,
                            levelupDescription: itor.levelupDescription,
                            levelupDescriptionRaw: itor.levelupDescriptionRaw,
                            keywordRefs: itor.keywordRefs,
                            spellSpeedRef: itor.spellSpeedRef,
                            rarityRef: itor.rarityRef,
                            collectible: itor.collectible,
                            gameSet: itor.set,
                            formatRefs: itor.formatRefs,
                            flavorText: itor.flavorText,
                            associatedCardRefs: itor.associatedCardRefs,
                            active: true,
                        });
                    }
                });
            });
            await Promise.all(card);
            progressBar.stop();
            await Promise.all([
                rmSync(foldername, { recursive: true }),
                rmSync(filename),
            ]);
        }

        return { [set]: true };
    }
}
