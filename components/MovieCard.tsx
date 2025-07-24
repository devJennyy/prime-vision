import { Link } from "expo-router";
import { Skeleton } from "moti/skeleton";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

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
  const imageClass = horizontal ? "w-32" : "w-full";

  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSkeleton(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className={horizontal ? "w-32" : "w-[31%]"}>
        {showSkeleton ? (
          <Skeleton
            show
            width={115}
            height={208}
            radius={10}
            colorMode="light"
            backgroundColor="#030812"
            colors={["#171B33", "#3842A8", "#171B33"]}
            transition={{ type: "timing" }}
          />
        ) : (
          <Image
            source={
              poster_path
                ? { uri: `https://image.tmdb.org/t/p/w500${poster_path}` }
                : require("../assets/images/no-image-found.png")
            }
            className={`${imageClass} rounded-lg h-52`}
            resizeMode="cover"
          />
        )}

        <View style={{ marginTop: 7 }}>
          {showSkeleton ? (
            <Skeleton
              show
              width={115}
              height={20}
              radius={3}
              colorMode="light"
              backgroundColor="#030812"
              colors={["#171B33", "#3842A8", "#171B33"]}
              transition={{ type: "timing" }}
            />
          ) : (
            <Text className="text-sm font-bold text-white line-clamp-1">
              {title}
            </Text>
          )}
        </View>

        <View style={{ marginTop: 3 }}>
          {showSkeleton ? (
            <Skeleton
              show
              width={30}
              height={15}
              radius={3}
              colorMode="light"
              backgroundColor="#030812"
              colors={["#171B33", "#3842A8", "#171B33"]}
              transition={{ type: "timing" }}
            />
          ) : (
            <Text className="text-[10px] font-bold text-muted/50">
              {release_date.slice(0, 4)}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
