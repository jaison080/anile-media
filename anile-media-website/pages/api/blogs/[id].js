import db from '../../../firebase';
export default async (req, res) => {
  const { id } = req.query;

  try {
    if (req.method === 'PUT') {
        const data = req.body;
        const blog =  await db.collection('blogs').doc(id);
        await blog.update(data);
        res.send('Blog data updated successfuly');
    } else if (req.method === 'GET') {
        const blog = await db.collection('blogs').doc(id);
        const data = await blog.get();
        console.log(blog)
        console.log(data.data())
        if(data.empty) {
            res.status(404).send('No student record found');
        }else {
            res.send(data.data());
        }
    } else if (req.method === 'DELETE') {
        await db.collection('blogs').doc(id).delete();
        res.send('Record deleted successfuly');
    }
    res.status(200).end();
  } catch (e) {
    res.status(400).send(error.message);
  }
}