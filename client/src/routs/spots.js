router.post('/:id/comment', async (req, res) => {
    const { text, isAnonymous } = req.body;
  
    const spot = await Spot.findById(req.params.id);
    spot.comments.push({ text, isAnonymous });
    await spot.save();
  
    res.json({ message: 'Comment added', spot });
  });
  