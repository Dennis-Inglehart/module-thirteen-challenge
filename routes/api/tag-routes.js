const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// get all tags
// not sure what "be sure to include its associated Product data" was supposed to mean (maybe a request body thing?)
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll();
    res.json(tags);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// get a single tag
// again, not sure what "be sure to include its associated Product data" is supposed to mean (maybe a request body thing?)
router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id);

    if (!tag) {
      res.status(404).json({ message: 'Tag not found' });
      return;
    }

    res.json(tag);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// create a new tag
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(201).json(newTag);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// update a particular tag
router.put('/:id', async (req, res) => {
  try {
    const updatedTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!updatedTag[0]) {
      res.status(404).json({ message: 'Tag not found' });
      return;
    }

    res.json(updatedTag);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// delete a particular tag
router.delete('/:id', async (req, res) => {
  try {
    const deletedTag = await Tag.destroy({
      where: { id: req.params.id },
    });

    if (!deletedTag) {
      res.status(404).json({ message: 'Tag not found' });
      return;
    }

    res.status(200).json({ message: 'Tag deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;