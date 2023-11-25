"use client";
import Image from 'next/image'
import React, { useState } from 'react'

interface AnimeStar {
  score: string;
}

const AnimeStar = ({ score }: AnimeStar) => {
  // Convertir le score en nombre (float)
  const initialScore = parseFloat(score);

  // Utiliser useState pour gérer l'état du like
  const [liked, setLiked] = useState(false);
  const [scoreRank, setScoreRank] = useState(initialScore.toFixed(1)); // Afficher un chiffre après la virgule

  const handleClick = () => {
    if (liked) {
      const newScore = initialScore - 0.1;
      setScoreRank(newScore.toFixed(1));
    } else {
      const newScore = initialScore + 0.1;
      setScoreRank(newScore.toFixed(1));
    }
    setLiked(!liked);
  }

  return (
    <div onClick={handleClick} className={`flex flex-row gap-2 items-center ${liked ? 'text-[#FFAD49]' : ''}`}>
      <Image
        src="./star.svg"
        alt="star"
        width={18}
        height={18}
        className="object-contain"
      />
      <p className="text-base font-bold">{scoreRank}</p>
    </div>
  )
}

export default AnimeStar
