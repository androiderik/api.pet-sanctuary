import express from 'express'

export const getPetImages=  async (req?: express.Request, res?: express.Response) => {

    const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": process.env.API_KEY
      });
      
      const requestOptions: object = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
      };

      try {
        const response = await fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
        const data =  await response.json()

        return res.status(200).json(data);
      }catch(err){
        console.log(err, "error while retrieving dog breed")
        return err
      }

}