// controllers/lectureProgressController.js
import LectureProgress from '../models/LectureProgress.model.js';

export const updateLectureProgress = async (req, res) => {
  try {
    const { subjectId, chapterId, lectureId, completed, subjectName, chapterName, lectureTitle, duration, date } = req.body;
    const userId = req.user.id; 

    if (!subjectId || !chapterId || !lectureId) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    // Step 1: Find or Create Subject
    let subjectDoc = await LectureProgress.findOne({ id: subjectId, user: userId });
    if (!subjectDoc) {
      subjectDoc = new LectureProgress({
        user: userId,
        id: subjectId,
        name: subjectName || subjectId,
        chapters: [],
      });
    }

    // Step 2: Find or Create Chapter
    let chapter = subjectDoc.chapters.find((ch) => ch.id === chapterId);
    if (!chapter) {
      chapter = {
        id: chapterId,
        name: chapterName || chapterId,
        lectures: [],
      };
      subjectDoc.chapters.push(chapter);
    }

    // Step 3: Find or Create Lecture
    let lecture = chapter.lectures.find((lec) => lec.id === lectureId);
    if (!lecture) {
      lecture = {
        id: lectureId,
        title: lectureTitle || lectureId,
        duration: duration || '',
        date: date || '',
        completed: completed || false,
      };
      chapter.lectures.push(lecture);

      // await lecture
    } else {
      lecture.completed = completed;
    }

    await subjectDoc.save();
    res.status(200).json({ success: true, message: 'Lecture status updated (and created if needed)' });
  } catch (error) {
    console.error('Error updating lecture status:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const getLectureCompletionStatus = async (req, res) => {
  try {
    console.log(req.body)
    const { subjectId} = req.body;
    const userId = req.user.id;

    const subject = await LectureProgress.findOne({ id: subjectId, user: userId });
    console.log("subject hggjjhg", subject)
    
    if (!subject) {
      return res.status(200).json({ completed: false });
    }

    const chapters = subject.chapters;
    

    return res.status(200).json({ status: chapters });
  } catch (error) {
    console.error('Error fetching subjects status:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const getLectureProgress = async (req, res) => {
  try {
    // In a real application, you'd get the userId from authenticated session (e.g., req.user.id)
    // For demonstration, we'll assume it comes from a URL parameter.
    const userId = req.user.id; // Example: /api/progress/:userId

    if (!userId) {
      return res.status(400).json({ message: 'User ID is required.' });
    }

    const userProgress = await LectureProgress.find({ user: userId });

    if (!userProgress) {
      return res.status(200).json({ chapters: [] });
    }

    console.log('User Progress:', userProgress);

    // Send back the 'chapters' array as per your model structure
    res.status(200).json(userProgress); // Sending the whole document to match frontend's userLectureProgressData

  } catch (error) {
    console.error('Error fetching lecture progress:', error);
    res.status(500).json({ message: 'Server error while fetching lecture progress.' });
  }
};