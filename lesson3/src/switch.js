const a = 5;

switch (true) {
  case a < 3:
    console.log(false);
    break;
  case a <= 5:
    console.log(true);
    break;
  case a < 10:
    console.log(false);
    break;
  default:
    console.log('No match found');
}
