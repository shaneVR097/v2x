$(document).ready(function() {
    // Toggle registration form visibility
    $('#register-toggle').click(function() {
        $('#register-vehicle').toggleClass('hidden');
    });

    // Open registration form on button click
    $('#open-registration-form').click(function() {
        $('#register-vehicle').removeClass('hidden');
    });

    // Dummy data for new vehicles onboarded
    var newVehicles = [
        { numberPlate: 'ABC123', id: '1' },
        { numberPlate: 'XYZ456', id: '2' }
    ];

    // Display new vehicles onboarded
    newVehicles.forEach(function(vehicle) {
        $('#new-vehicles-table').append(`<tr><td>${vehicle.numberPlate}</td><td>${vehicle.id}</td></tr>`);
    });

    // Register form submission
    $('#registration-form').submit(function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Form submitted');
    });

    // Dummy data for vehicle data, new vehicles onboarded, and vehicles deregistered
    var vehicles = [
        { type: 'passenger', numberPlate: 'ABC123', id: '1', ipAddress: '192.168.1.1' },
        { type: 'commercial', numberPlate: 'XYZ456', id: '2', ipAddress: '192.168.1.2' }
    ];
    var newVehicles = [
        { numberPlate: 'PQR789', id: '3' },
        { numberPlate: 'LMN012', id: '4' }
    ];
    var deregisteredVehicles = [
        { numberPlate: 'XYZ456', id: '2' }
    ];

    // Function to populate table with vehicle data based on selected type
    function populateVehicleDataTable(type) {
        var filteredVehicles = (type === 'all') ? vehicles : vehicles.filter(v => v.type === type);
        var vehicleDataHtml = '';
        filteredVehicles.forEach(function(vehicle) {
            vehicleDataHtml += `<tr><td>${vehicle.numberPlate}</td><td>${vehicle.id}</td><td>${vehicle.ipAddress}</td></tr>`;
        });
        $('#vehicle-data-table').html(vehicleDataHtml);
    }

    // Function to populate table with new vehicles onboarded
    function populateNewVehiclesTable() {
        var newVehiclesHtml = '';
        newVehicles.forEach(function(vehicle) {
            newVehiclesHtml += `<tr><td>${vehicle.numberPlate}</td><td>${vehicle.id}</td></tr>`;
        });
        $('#new-vehicles-table').html(newVehiclesHtml);
    }

    // Function to populate table with vehicles deregistered
    function populateDeregisteredVehiclesTable() {
        var deregisteredVehiclesHtml = '';
        deregisteredVehicles.forEach(function(vehicle) {
            deregisteredVehiclesHtml += `<tr><td>${vehicle.numberPlate}</td><td>${vehicle.id}</td></tr>`;
        });
        $('#deregistered-vehicles-table').html(deregisteredVehiclesHtml);
    }

    // Initial population of tables
    populateVehicleDataTable('all');
    populateNewVehiclesTable();
    populateDeregisteredVehiclesTable();

    // Handle vehicle type dropdown change
    $('#vehicle-type').change(function() {
        var selectedType = $(this).val();
        populateVehicleDataTable(selectedType);
    });
});
