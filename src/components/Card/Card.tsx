import React from 'react'
import styles from './styles.module.scss';

type Props = {
  character: string;
  transcription: string;
  tip?: string;
  onClick?: () => void;
}

const Card = ({character, transcription, onClick}: Props) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.cardChar}>
        {character}
      </div>
      {transcription}
    </div>
  )
}

export default Card