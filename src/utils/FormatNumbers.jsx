import numeral from 'numeral';

const FormatNumbers = (value) => {
  const startNumber = value ? numeral(value).format('0,0.00') : ' ';
  return startNumber;
};

const ParseForCompare = (value) => {
  return parseFloat(value.replaceAll(',', '').replaceAll('.', ''))
}

export {FormatNumbers, ParseForCompare};
