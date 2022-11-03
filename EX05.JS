var idade = 64;
console.log(`sau idade é ${idade}`)
if ( idade < 16) {
    console.log(`vpcê não pode votar`)
}
else if (idade < 18 || idade > 65) {
    console.log(`seu voto é opcional`)
}
else {
    console.log(`seu voto é OBRIGATÓRIO`)
}