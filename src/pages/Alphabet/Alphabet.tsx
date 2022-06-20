import React from 'react'
import MainLayout from '../../components/MainLayout'
import { alphabet } from '../../data/alphabet';
import styles from './styles.module.scss';

const Alphabet = () => {
  return (
    <MainLayout>
      <div className={styles.alphabet}>
        {alphabet.map((character: {value: string, transcription: string}) => (
          <div className={styles.alphabetChar}>
            <div className={styles.alphabetCharValue}>{character.value}</div>
            <div className={styles.alphabetCharTranscription}>{character.transcription}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  )
}

export default Alphabet