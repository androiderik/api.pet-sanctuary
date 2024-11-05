import express from 'express';
import {  getPetImages } from "../controllers/pets/getPetImages";

//any user can get all users but must be authenticated
//users can delete themes selves and must be authenticated with the account the want to delete
export default (router: express.Router)=> {
    router.get('/pet-images', getPetImages);
}