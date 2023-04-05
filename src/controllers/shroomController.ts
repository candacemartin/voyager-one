import { Request, Response } from 'express';

let shrooms = [];

const shroomController = {
    
    getShrooms(req: Request, res: Response){
        return res.json(shrooms);
    },
    
    createShroom(req: Request, res: Response){
        console.log('inside create');
        const newShroom = req.body;
        console.log('newShroom from req.body', newShroom);
        newShroom.id = shrooms.length + 1
        console.log('newShroom w id', newShroom);
        shrooms.push(newShroom);
        console.log('shrooms', shrooms);
        return res.status(201).json(newShroom);
    },
    
    getShroomById(req: Request, res: Response){
        const shroomID = req.params.id;
        const foundShroom = shrooms.find(shroom => shroom.id === shroomID);
        if (!foundShroom) {
            return res.status(404).json({ message: 'so sorry, shroom not found' });
          }
          res.json(foundShroom);
    },
    
    updateShroomById(req: Request, res: Response){
        const shroomID = req.params.id;
        const shroomIndex = shrooms.findIndex(shroom => shroom.id === shroomID);
        if (shroomIndex < 0) {
            return res.status(404).json({ message: 'so sorry, shroom not found'})
        };
        const updatedShroom = { ...shrooms[shroomIndex], ...req.body };
        shrooms[shroomIndex] = updatedShroom;
        res.json(updatedShroom);
    },
    
    deleteShroomById(req: Request, res: Response){
        const shroomId = req.params.id;
        const shroomIndex = shrooms.findIndex(shroom => shroom.id === shroomId);
        if (shroomIndex < 0) {
          return res.status(404).json({ message: 'so sorry, shroom not found' });
        }
        shrooms.splice(shroomIndex, 1);
        res.status(204).send();
    },
};

export default shroomController;
