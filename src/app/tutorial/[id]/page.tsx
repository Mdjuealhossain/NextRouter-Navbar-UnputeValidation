import React from "react";

interface propstyp {
  params: { id: string };
  userdata: {
    id: string;
    name: string;
    email: string;
  }[];
}

const userdata = [
  {
    id: "1",
    name: "jueal",
    email: "jueal@gmail",
  },
  {
    id: "2",
    name: "masum",
    email: "masu@gmail",
  },
  {
    id: "3",
    name: "muhit",
    email: "muhit@gmail",
  },
];
export default function Page({ params }: propstyp) {
  const filteredData = userdata.filter((data) => {
    return params.id === data.id;
  });

  return (
    <>
      {filteredData.map((value) => {
        return (
          <>
            <h1>My name is {value.name}</h1>
            <p>{value.email}</p>
          </>
        );
      })}
    </>
  );
}
