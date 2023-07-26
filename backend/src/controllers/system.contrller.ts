import { SystemService } from '@/services/system.service';
import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('system')
class SystemController {
    constructor(private readonly service: SystemService) {}

    @Get('/sync')
    async sycnData(@Res() res: Response) {
        try {
            const data = await this.service.syncData();
            return res.status(200).json(data);
        } catch (error) {
            console.log(error);

            throw error;
        }
    }
}

export default SystemController;
