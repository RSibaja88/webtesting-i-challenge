module.exports = {
  succeed,
  fail,
  repair,
  // get,
};

function succeed(item) {
  if (item.enhancement < 20) {
    const success = {
      name: item.name,
      durability: item.durability,
      enhancement: item.enhancement + 1,
    }
    return success
  } else {
    const err = "Enhancement is above 20, no handouts"
    return (err)
  }
 
}

function fail(item) {
  const weakenD5 = item.durability - 5
  const weakenD10 = item.durability - 10
  const weakenE = item.enhancement - 1

  if (item.enhancement < 15) {
    return ({ ...item, durability: weakenD5 })
  } else if (item.enhancement >= 15) {
    return ({ ...item, durability: weakenD10 })
  } else if (item.enhancement > 16) {
    return ({ ...item, enhancement: weakenE })
  } else {
    return { ...item, };
  }
}


function repair(item) {
  if (item.durability < 100) {
    const mend = {
      name: item.name,
      durability: 100,
      enhancement: item.enhancement, 
    }
    return mend
}

// function get(item) {
//   return { ...item };
// }
}
