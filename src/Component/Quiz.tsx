/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import QuizPlay from './QuizPlay';
import { useDispatch, useSelector } from 'react-redux';
import { data as anime } from '../utility/DB/anime';
import { data as manga } from '../utility/DB/manga';
import { data as naruto } from '../utility/DB/naruto';
import { data as jjk } from '../utility/DB/jjk';
import { data as solo } from '../utility/DB/solo-leveling';
import { data as deathNote } from '../utility/DB/death-note';
import { data as COTE } from '../utility/DB/classroom-of-the-elite';
import { data as DS} from '../utility/DB/demon-slayer.js';
import {gamestartfn} from '../redux/Features/GameSlice.js';

interface QuizProps {
  sub: string;
}

const Quiz = ({ sub }: QuizProps) => {
  const dispatch = useDispatch();
  const userdata = useSelector((state: any) => state.user);
  const [loader, setLoader] = useState(true);
  const [questions, setQuestions] = useState<any[]>([]);

  const shuffleArray = (arr: any[]) => [...arr].sort(() => 0.5 - Math.random());

  const getRandomizedQuestions = (
    easy: any[],
    medium: any[],
    hard: any[],
    counts: { easy: number; medium: number; hard: number }
  ) => {
    let result: any[] = [];
    const maxQuestions = counts.easy + counts.medium + counts.hard;

    const easyQuestions = shuffleArray(easy);
    const mediumQuestions = shuffleArray(medium);
    const hardQuestions = shuffleArray(hard);

    let i = 0;
    while (result.length < maxQuestions) {
      if (i < counts.easy && result.length < maxQuestions) {
        result.push(easyQuestions[i % easyQuestions.length]);
      }
      if (i < counts.medium && result.length < maxQuestions) {
        result.push(mediumQuestions[i % mediumQuestions.length]);
      }
      if (i < counts.hard && result.length < maxQuestions) {
        result.push(hardQuestions[i % hardQuestions.length]);
      }
      i++;
    }

    return shuffleArray(result);
  };

  const fetchQuestionsBasedOnAge = () => {
    let easyQuestions, mediumQuestions, hardQuestions;

    if (sub === 'Shonen Anime') {
      easyQuestions = anime.easy;
      mediumQuestions = anime.medium;
      hardQuestions = anime.hard;
    } else if (sub === 'Manga') {
      easyQuestions = manga.easy;
      mediumQuestions = manga.medium;
      hardQuestions = manga.hard;
    } else if (sub === 'Naruto') {
      easyQuestions = naruto.easy;
      mediumQuestions = naruto.medium;
      hardQuestions = naruto.hard;
    } else if (sub === 'jjk') {
      easyQuestions = jjk.easy;
      mediumQuestions = jjk.medium;
      hardQuestions = jjk.hard;
    } else if (sub === 'solo') {
      easyQuestions = solo.easy;
      mediumQuestions = solo.medium;
      hardQuestions = solo.hard;
    } else if (sub === 'deathNote') {
      easyQuestions = deathNote.easy;
      mediumQuestions = deathNote.medium;
      hardQuestions = deathNote.hard;
    } else if (sub === 'cote') {
      easyQuestions = COTE.easy;
      mediumQuestions = COTE.medium;
      hardQuestions = COTE.hard;
    } else {
      easyQuestions = DS.easy;
      mediumQuestions = DS.medium;
      hardQuestions = DS.hard;
    }

    let questionCounts = { easy: 0, medium: 0, hard: 0 };

    const userAge = parseInt(userdata.age);
    if (userAge < 15) {
      questionCounts = { easy: 8, medium: 8, hard: 0 };
    } else if (userAge >= 15 && userAge <= 25) {
      questionCounts = { easy: 5, medium: 7, hard: 4 };
    } else {
      questionCounts = { easy: 3, medium: 9, hard: 4 };
    }

    const selectedQuestions = getRandomizedQuestions(
      easyQuestions,
      mediumQuestions,
      hardQuestions,
      questionCounts
    );

    setQuestions(selectedQuestions);
    setLoader(false);
    dispatch(gamestartfn(true));
  };

  useEffect(() => {
    fetchQuestionsBasedOnAge();
  }, [userdata, sub]);

  return (
    <div>
      {loader ? null : (
        <QuizPlay questions={questions} refreshQuestions={fetchQuestionsBasedOnAge} />
      )}
    </div>
  );
};

export default Quiz;

