import Image from "next/image";
import React from "react";
import { useGetALLData } from "../../hooks/useGetALLData";
import { People } from "../../types/People";
const CharacterPage = () => {
  const { data, isError, isLoading, isSuccess } = useGetALLData(0);

  console.log(data);

  //create a return with a loading state;
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }
  //create a return with a success state and map over the data;
  if (isSuccess) {
    console.log(data);
    console.log(data?.results);
     
    return (
      <div>
        {data &&
          
          ))}
      </div>
    );
  }
};

export default CharacterPage;
