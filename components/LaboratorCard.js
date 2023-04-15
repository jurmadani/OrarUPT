import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { data } from "../AC-IS-Data";
import { useState } from "react";
import { ScrollView } from "react-native";

const grupeArray = [
  "1.1",
  "1.2",
  "2.1",
  "2.2",
  "3.1",
  "3.2",
  "4.1",
  "4.2",
  "5.1",
  "5.2",
  "6.1",
  "6.2",
];

const prescurtari = {
  "Medii şi tehnologii de programare": "MTP",
  "Baze de date": "BD",
  "Securitatea informatiei": "SI",
  "Modelare, simulare şi elemente de identificare": "MSEI",
  "Tehnici de optimizare": "TO",
  "Sisteme bazate pe microprocesoare şi microcontrolere": "SBMM",
  Microeconomie: "Microeconomie",
};

const LaboratorCard = ({ zi, materie }) => {
  const DisplayTheViewCard = ({ ora, materieObject, grupa }) => {
    return (
      <View
        style={{
          alignItems: "flex-start",
          marginLeft: 20,
          flexDirection: "row",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 17 }}>Grupa {grupa}</Text>
        <Text style={{fontSize:17, marginLeft:6,marginRight:6,}}>la</Text>
        <Text style={{fontSize:17,fontWeight:'bold'}}>{ora}</Text>
        <Text style={{fontSize:17,marginLeft:6,marginRight:6,}}>
          in
        </Text>
        <Text style={{fontWeight:'bold',fontSize:17,}}>
          {materieObject.Sala}
        </Text>
      </View>
    );
  };

  const ComponentaCard = ({ zi }) => {
    var existaLaboratoare = false;

    return (
      <View>
        <Text style={{ fontWeight: "bold", margin: 20, fontSize: 30 }}>
          {zi.charAt(0).toUpperCase() + zi.slice(1)}
        </Text>

        {grupeArray.map((grupa) => {
          try {
            const entriesLaboratoare = Object.entries(
              data.ANUL_II_SERIA_IS_SEM_II_2022_2023_LABORATOARE[zi][grupa]
            );

            return (
              <View key={grupa}>
                {entriesLaboratoare.map(([key, value]) => {
                  if (value.Materie === prescurtari[materie]) {
                    existaLaboratoare = true;
                    return (
                      <DisplayTheViewCard
                        key={key}
                        ora={key}
                        materieObject={value}
                        grupa={grupa}
                      />
                    );
                  } else {
                    return null;
                  }
                })}
              </View>
            );
          } catch (e) {}
        })}
        {existaLaboratoare === false && (
          <Text style={{ alignSelf: "center" }}>
            Nici o grupa nu are laborator de {prescurtari[materie]} in aceasta zi
          </Text>
        )}
      </View>
    );
  };

  return (
    <View>
      <ComponentaCard zi={zi} />
    </View>
  );
};

export default LaboratorCard;
