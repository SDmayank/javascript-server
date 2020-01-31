import { Request , Response } from 'express';

class TraineeController {
static instance ;
static getInstance = () => {
if ( TraineeController.instance) {
return TraineeController.instance;
}
TraineeController.instance = new TraineeController();
return TraineeController.instance;
}
create = (req: Request , res: Response) => {
    console.log('::::::::Create Trainee:::::::::::::::');
    const Traineedata={
        status: 'Done',
        message: 'Trainee Created Successfully',
        data: {
            id: 1673,
            name: 'mayank garg',
            address: 'Faridabad',

        }
    };
    res.send(Traineedata);
}

list = (req: Request , res: Response) => {
    console.log('::::::::Added Trainee:::::::::::::::');
    const Traineedata = {
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

};
 res.send(Traineedata);
}

update = (req: Request , res: Response) => {
    console.log('::::::::Updated Trainee:::::::::::::::');
    const Traineedata = {
        status: 'Done',
        message: 'Trainee Created Successfully',
        data: {
            id: 1673,
            name: 'mayank garg',
            address: 'Faridabad',

        }
    };
    res.send(Traineedata);
}

delete = (req: Request , res: Response) => {
    console.log(':::::::: Delete Trainee:::::::::::::::');
    const Traineedata = {
        status: 'Done',
        message: 'Trainee Delete Successfully',
        data: {
            id: 1673,
            name: 'mayank garg',
            address: 'Faridabad',

        }
    };
    res.send( Traineedata );
}
}

export default TraineeController.getInstance();
