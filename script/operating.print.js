function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    document.body.insertAdjacentHTML('beforeend', `
        <p class="badge">
        *This is an electronically generated document. Get this verified from AAA section for its validity.
        </p>
        <br>
        <br>
        ______________________ Student Signature <br>
        <br>
        <br>
        ______________________ Issuer's Signature <br>
        <br>
        <br>
        ______________________ Seal AAA Section <br>

    `);
    window.print();

    document.body.innerHTML = originalContents;
}