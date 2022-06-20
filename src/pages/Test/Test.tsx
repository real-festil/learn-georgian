import React, { useEffect, useState } from 'react'
import Button from '../../components/Button';
import MainLayout from '../../components/MainLayout'
import { alphabet } from '../../data/alphabet';
import { Character } from '../../types/Character';

import styles from './styles.module.scss';

type Answer = {
  isCorrect: boolean;
  message: string
}

const Test = () => {
  const [currentChar, setCurrentChar] = useState(null as null | Character);
  const [options, setOptions] = useState([] as Character[]);
  const [currentAnswer, setCurrentAnswer] = useState(null as null | Answer);
  const [counter, setCounter] = useState(0);
  const [correctAnswerCounter, setCorrectAnswerCounter] = useState(0);
  const [isAnswerTouched, setIsAnswerTouched] = useState(false);

  const getRandomCharacter: any = (existingChars: Character[]) => {
    const char = alphabet[Math.floor((Math.random() * alphabet.length))];
    if (existingChars) {
      if (!existingChars.includes(char)) {
        return char;
      } else {
        return getRandomCharacter();
      }
    }
    return char;
  }

  const shuffleArray = (array: any[]) => {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}

  useEffect(() => {
    generateTest();
  }, [])

  const generateTest = () => {
    const opt1 = getRandomCharacter();
    const opt2 = getRandomCharacter([opt1]);
    const opt3 = getRandomCharacter([opt1, opt2]);
    setCurrentChar(opt1);
    setOptions(shuffleArray([opt1, opt2, opt3]));
    setCurrentAnswer(null);
    setCounter(counter + 1);
    setIsAnswerTouched(false);
  }

  const onOptionClick = (option: Character) => {
    if (option.value === currentChar?.value) {
      setCurrentAnswer({isCorrect: true, message: "Правильный ответ!!!"});
      if (!isAnswerTouched) {
        setCorrectAnswerCounter(correctAnswerCounter + 1);
      }
    } else {
      setCurrentAnswer({isCorrect: false, message: "Неправильно, попробуй еще!"})
    }
    setIsAnswerTouched(true);
  }

  return (
    <MainLayout>
      {currentChar && options.length > 0 && (
        <div className={styles.test}>
          <p className={styles.testCharacter}>{currentChar.value}</p>
          {options.map(option => (
            <Button key={option.value} onClick={() => onOptionClick(option)} label={option.transcription} />
          ))}
          {currentAnswer && (
            <>
            {currentAnswer.isCorrect ? (
              <div className={styles.testCorrect}>
                {currentAnswer.message}
              </div>
            ) : (
              <div className={styles.testIncorrect}>
                {currentAnswer.message}
              </div>
            )}
            </>
          )}
          <p className={styles.testCounter}>{`Правильные ответы: ${correctAnswerCounter}/${counter}`}</p>
          <Button onClick={generateTest} label="Следующая буква" />
        </div>
      )}
    </MainLayout>
  )
}

export default Test