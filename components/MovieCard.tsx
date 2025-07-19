import { Link } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

type MovieCardProps = {
  id: number;
  poster_path: string | null;
  title: string;
  release_date: string;
  horizontal?: boolean;
};

const MovieCard = ({
  id,
  poster_path,
  title,
  release_date,
  horizontal = false,
}: MovieCardProps) => {
  const imageClass = horizontal ? 'w-32' : 'w-full';

  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className={horizontal ? 'w-32' : 'w-[31%]'}>
        <Image
          source={
            poster_path
              ? { uri: `https://image.tmdb.org/t/p/w500${poster_path}` }
              : require('../assets/images/no-image-found.png')
          }
          className={`${imageClass} rounded-lg h-52`}
          resizeMode="cover"
        />

        <Text className="text-sm font-bold text-white mt-2 line-clamp-1">
          {title}
        </Text>
        <Text className="text-[10px] font-bold text-muted/50 mt-1">
          {release_date.slice(0, 4)}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
