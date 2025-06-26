// server/scripts/seedSubjects.js
import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();


import Subject from '../models/Subject.model.js';
import allSubjectsData from '../../../client/src/Components/allSubjectsData.js';
import { DB_NAME } from '../constants.js';
import connectDB from '../db/index.js';

const seedSubjects = async () => {
  try {
    await connectDB();
    await Subject.deleteMany({});

    for (const subject of allSubjectsData) {
    if(subject.name != "Geography")continue;
      const newSubject = new Subject({
        id: subject.id,
        name: subject.name,
        chapters: subject.chapters.map((chapter) => ({
          id: chapter.id,
          name: chapter.name,
          lectures: chapter.lectures.map((lec) => ({
            id: lec.id,
            title: lec.title,
            duration: lec.duration,
            date: lec.date,
            completed: false
          })),
        })),
      });
      await newSubject.save();
    }

    console.log('✅ Subject data seeded successfully.');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error seeding subjects:', err);
    process.exit(1);
  }
};

seedSubjects();
