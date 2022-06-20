import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import Card from '../../components/Card';
import MainLayout from '../../components/MainLayout';
import styles from './styles.module.scss';
import { alphabet } from '../../data/alphabet';
import { Link } from 'react-router-dom';
import { Character } from '../../types/Character';

const Home = () => {
  const [character, setCharacter] = useState(null as null | Character);

  useEffect(() => {
    setCharacter(getRandomCharacter())
  }, []);

  const getRandomCharacter = () => {
    return alphabet[Math.floor((Math.random()*alphabet.length))]
  }

  return (
    <MainLayout>
      <div className={styles.home}>
        {character && (
          <Card onClick={() => setCharacter(getRandomCharacter())} character={character.value} transcription={character.transcription} />
        )}
        <Link to="/alphabet">
          <Button label="Алфавит"/>
        </Link>
        <Link to="/test">
          <Button label="Тесты"/>
        </Link>
      </div>
    </MainLayout>
  )
}

export default Home