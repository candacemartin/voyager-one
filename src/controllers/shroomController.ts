import { Request, Response } from 'express';
import Shroom from '../models/shroomModel';
import { createDecipheriv } from 'crypto';

const shroomController = {
    
    async getShrooms(req: Request, res: Response){
        try{
            const shrooms = await Shroom.find();
            return res.json(shrooms);
        } catch (err) {
            console.log(err);
            return res.status(500).json({message: err.message});
        };
    },
    
    async createShroom(req: Request, res: Response){
        console.log('inside create');
        const newShroom = req.body;
        console.log('newShroom from req.body', newShroom);

        await Shroom.create(newShroom)
        .then((createdShroom) => {
            console.log('createdShroom', createdShroom);
            return res.status(201).json(createdShroom);
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json({message: err.message});
        });    
    },
    
    async getShroomById(req: Request, res: Response){
        const shroomId = req.params.id;
        console.log('inside getShroomById', shroomId)
        try{
            const foundShroom = await Shroom.findOne({ _id: shroomId });
            if (!foundShroom) {
                return res.status(404).json({ message: 'so sorry, shroom not found' });
            } else {
                return res.json(foundShroom);
            };
        } catch (err) {
            console.log(err);
            return res.status(500).json({message: err.message});
        };
    },
    
    async updateShroomById(req: Request, res: Response){
        const shroomId = req.params.id;
        const shroomUpdate = req.body;
        console.log('inside updateShroomById', shroomId, shroomUpdate);
        try{
            const updatedShroom = await Shroom.findOneAndUpdate({ _id: shroomId }, shroomUpdate , { new: true });
            if (!updatedShroom) {
                return res.status(404).json({ message: 'so sorry, shroom not found' });
            } else {
                return res.json(updatedShroom);
            };
        } catch (err) {
            console.log(err);
            return res.status(500).json({message: err.message});
        };
    },
    
    async deleteShroomById(req: Request, res: Response){
        try {
            const shroomId = req.params.id;
            const deletedShroom = await Shroom.findByIdAndDelete(shroomId);
            if (!deletedShroom) {
              return res.status(404).json({ message: 'Shroom not found' });
            }
            return res.status(204).send();
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: err.message });
        }
    }
};

export default shroomController;
