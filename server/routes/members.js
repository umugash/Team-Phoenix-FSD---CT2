const express = require('express');
const router = express.Router();
const multer = require('multer');
const Member = require('../models/Member');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({ storage: storage });

// POST: Add member
router.post('/', upload.single('image'), async (req, res) => {
  const newMember = new Member({
    id: req.body.id,
    name: req.body.name,
    roll: req.body.roll,
    year: req.body.year,
    degree: req.body.degree,
    project: req.body.project,
    hobbies: req.body.hobbies,
    certificate: req.body.certificate,
    internship: req.body.internship,
    aim: req.body.aim,
    image: req.file ? req.file.filename : null,
  });
  try {
    await newMember.save();
    res.status(201).json(newMember);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET: All members
router.get('/', async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET: Single member
router.get('/:id', async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    res.json(member);
  } catch (err) {
    res.status(404).json({ error: 'Member not found' });
  }
});

module.exports = router;
