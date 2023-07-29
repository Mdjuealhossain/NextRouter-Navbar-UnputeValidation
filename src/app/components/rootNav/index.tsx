"use client";
import Link from "next/link";
import React from "react";

interface propsTyp {
  navlink: {
    id: number;
    name: string;
    href: string;
  }[];
}

const Navigation = ({ navlink }: propsTyp) => {
  return (
    <div className="Root-nav">
      <div>
        {navlink.map((link) => {
          return (
            <div key={link.id}>
              <div>
                <Link href={`${link.href}`} style={{ textDecoration: "none" }}>
                  {link.name}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <nav className="nav-sign">
        <Link href="#" className="nav-in">
          <p>Singn in</p>
        </Link>
        <Link href="#" className="nav-up">
          <p>Singn up</p>
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
