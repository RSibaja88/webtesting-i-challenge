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
    const err = "Enhancement is above 20, full optimization achieved"
    return (err)
  }
 
}

function fail(item) {
  const strike = item.durability - 5
  const strike2 = item.durability - 10
  const strike3 = item.enhancement - 1

  if (item.enhancement < 15) {
    return ({ ...item, durability: strike })
  } else if (item.enhancement >= 15) {
    return ({ ...item, durability: strike2 })
  } else if (item.enhancement > 16) {
    return ({ ...item, enhancement: strike3 })
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

};

