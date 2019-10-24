const imaginationTree = (start, year) => {
  if (start > 0 && year > 0) {
    let tree = start
    for (let i = 0; i < year; i++) {
      //prettier-ignore
      //when spring season
      tree = tree * 2;

      //when fall season
      tree += 1
    }
    console.log(`Start height : ${start}`)
    console.log(`Year : ${year}`)
    console.log(`Total tree height = ${tree}`)
  } else {
    console.log('Start height and year should be higher than 0 :)')
  }
}

imaginationTree(2, 2)
