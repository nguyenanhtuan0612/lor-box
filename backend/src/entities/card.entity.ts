import {
    AutoIncrement,
    Column,
    CreatedAt,
    DataType,
    Model,
    PrimaryKey,
    Table,
    Unique,
    UpdatedAt,
} from 'sequelize-typescript';

@Table({
    tableName: 'cards',
    timestamps: true,
})
export class Card extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Unique
    @Column
    cardCode: string;

    @Column
    name: string;

    @Column
    type: string;

    @Column(DataType.ARRAY(DataType.STRING))
    subtypes: string[];

    @Column
    gameAbsolutePath: string;

    @Column
    fullAbsolutePath: string;

    @Column(DataType.ARRAY(DataType.STRING))
    regionRefs: string[];

    @Column
    attack: number;

    @Column
    health: number;

    @Column
    cost: number;

    @Column(DataType.TEXT)
    description: string;

    @Column(DataType.TEXT)
    descriptionRaw: string;

    @Column(DataType.TEXT)
    levelupDescription: string;

    @Column(DataType.TEXT)
    levelupDescriptionRaw: string;

    @Column(DataType.ARRAY(DataType.STRING))
    keywordRefs: string[];

    @Column
    spellSpeedRef: string;

    @Column
    rarityRef: string;

    @Column
    collectible: boolean;

    @Column
    gameSet: string;

    @Column(DataType.ARRAY(DataType.STRING))
    formatRefs: string[];

    @Column(DataType.TEXT)
    flavorText: string;

    @Column(DataType.ARRAY(DataType.STRING))
    associatedCardRefs: string[];

    @Column({ defaultValue: true })
    active: boolean;

    @Column
    @CreatedAt
    createdAt: Date;

    @Column
    @UpdatedAt
    updatedAt: Date;
}
