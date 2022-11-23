import { NextApiRequest, NextApiResponse } from 'next';
import { emailSchema } from 'schemas/emailSchema';
import validate from 'server/validate';

function handler(req: NextApiRequest, res: NextApiResponse) {
  const url = 'https://api.sendinblue.com/v3/contacts';

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'api-key': process.env.SENDINBLUE_API_KEY as string,
    },
    body: JSON.stringify({
      email: req.body.email,
      updateEnabled: false,
      listIds: [5],
    }),
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      res.status(201).json({ message: 'Created contact successfully' });
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({ message: 'Bad request' });
    });
}

export default validate(emailSchema, handler);
