// Function to get satellite image of a state based on user input (state name)
function getStateImage(stateName) {
  // Load the state boundary dataset (Administrative 1-level - states)
  var states = ee.FeatureCollection('FAO/GAUL/2015/level1');

  // Filter the dataset to get the user's state
  var selectedState = states.filter(ee.Filter.eq('ADM1_NAME', stateName));

  // Check if the state exists in the dataset
  if (selectedState.size().getInfo() === 0) {
    print('State not found: ' + stateName);
    return;
  }

  // Load satellite image (Landsat 8 image)
  var image = ee.ImageCollection('LANDSAT/LC08/C01/T1')
                .filterBounds(selectedState)
                .filterDate('2023-01-01', '2023-12-31') // Change the year as per requirement
                .median(); // Median image for the year 2023

  // Display the image on the map
  Map.centerObject(selectedState, 6); // Zoom to the state
  Map.addLayer(image, {bands: ['B4', 'B3', 'B2'], min: 0, max: 3000}, 'Landsat Image');

  // Optionally, export the image
  Export.image.toDrive({
    image: image,
    description: stateName + '_Image',
    scale: 30,
    region: selectedState
  });
}

// Example: Call the function with a state name
getStateImage('Uttar Pradesh');  // You can change 'Uttar Pradesh' to any other state name
