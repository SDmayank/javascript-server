import { Request , Response } from 'express';

class TraineeController {
static instance;
static getInstance = () => {
if ( TraineeController.instance) {
return TraineeController.instance;
}
TraineeController.instance = new TraineeController();
return TraineeController.instance;
}
create = (req: Request , res: Response) => {
    console.log('::::::::Create Trainee:::::::::::::::');
    res.send({
        status: 'Done',
        message: 'Trainee Created Successfully',
        data: {
            id: 1673,
            name: 'mayank garg',
            address: 'Faridabad',

        }
    });
}

list = (req: Request , res: Response) => {
    console.log('::::::::Added Trainee:::::::::::::::');
    res.send({
        status: 'Done',
        message: 'Trainee Added Successfully',
        data: [{
            id: 1673,
            name: 'mayank garg',
            address: 'Faridabad',
        },
        {
             id: 1674,
            name: 'khushal garg',
            address: 'Delhi',

        },
        {
            id: 1675,
            name: 'sahil garg',
            address: 'gurugram'

        }]

});
}

update = (req: Request , res: Response) => {
    console.log('::::::::Updated Trainee:::::::::::::::');
    res.send({
        status: 'Done',
        message: 'Trainee Update Successfully',
        data: {
            id: 1673,
            name: 'mayank garg',
            address: 'Faridabad',

        }
    });
}

delete = (req: Request , res: Response) => {
    console.log(':::::::: Delete Trainee:::::::::::::::');
    res.send({
        status: 'Done',
        message: 'Trainee Delete Successfully',
        data: {
            id: 1673,
            name: 'mayank garg',
            address: 'Faridabad',

        }
    });
}
}

export default TraineeController.getInstance();
