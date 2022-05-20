import db from '../../../firebase';
export default async (req, res) => {
  const { id } = req.query;

  try {
    if (req.method === 'PUT') {
        const data = req.body;
        const forms =  await db.collection('form').doc(id);
        await forms.update(data);
        res.send('Form data updated successfuly');
    } else if (req.method === 'GET') {
        const forms = await db.collection('form').doc(id);
        const data = await forms.get();
        console.log(blogs)
        console.log(data.data())
        if(data.empty) {
            res.status(404).send('No student record found');
        }else {
            res.send(data.data());
        }
    } else if (req.method === 'DELETE') {
        await db.collection('form').doc(id).delete();
        res.send('Record deleted successfuly');
    }
    res.status(200).end();
  } catch (e) {
    res.status(400).send(error.message);
  }
}