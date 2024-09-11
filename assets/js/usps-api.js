require('dotenv').config();

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('shipping-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        calculateShipping();
    });
});

function calculateShipping() {
    const url = 'https://secure.shippingapis.com/ShippingAPI.dll';
    const userId = process.env.USPS_API_KEY; // Use environment variable
    const originZip = document.getElementById('origin-zip').value;
    const destinationZip = document.getElementById('shipping-zip').value;
    const weight = 2;

    const requestData = `
        <RateV4Request USERID="${userId}">
            <Revision>2</Revision>
            <Package ID="1ST">
                <Service>PRIORITY</Service>
                <ZipOrigination>${originZip}</ZipOrigination>
                <ZipDestination>${destinationZip}</ZipDestination>
                <Pounds>${Math.floor(weight)}</Pounds>
                <Ounces>${(weight % 1) * 16}</Ounces>
                <Container>RECTANGULAR</Container>
                <Size>REGULAR</Size>
                <Machinable>true</Machinable>
            </Package>
        </RateV4Request>
    `;

    fetch(`${url}?API=RateV4&XML=${encodeURIComponent(requestData)}`)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "text/xml");
            const rate = xmlDoc.getElementsByTagName("Rate")[0].textContent;
            document.getElementById('shipping').innerText = `$${rate}`;
            updateTotal();
        })
        .catch(error => console.error('Error:', error));
}

function updateTotal() {
    const subtotal = parseFloat(document.getElementById('subtotal').innerText.replace('$', ''));
    const shipping = parseFloat(document.getElementById('shipping').innerText.replace('$', ''));
    const total = subtotal + shipping;
    document.getElementById('total').innerText = `$${total.toFixed(2)}`;
}