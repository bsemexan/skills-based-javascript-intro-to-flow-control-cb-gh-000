function basicTeenager(age) {
  if (age > 12 && age < 20){
    return "You are a teenager!";
  } else {
    return undefined;
  }
}

function teenager(age) {
  if (age > 12 && age < 20){
    return "You are a teenager!";
  } else {
    return "You are not a teenager";
  }
}

function ageChecker(age) {
  if (age > 12 && age < 20){
    return "You are a teenager!";
  } else if (age < 13){
    return "You are a kid";
  } else {
    return "You are a grownup";
  }
}

function ternaryTeenager(age) {
  if (age > 12 && age < 20){
    return "You are a teenager";
  } else {
    return "You are not a teenager";
  }
}

function switchAge(age) {
  switch(true){
    case (age > 12 && age < 20):
      return "You are a teenager";
      break;
    default:
      return "You have an age";
      break;
  }
}
