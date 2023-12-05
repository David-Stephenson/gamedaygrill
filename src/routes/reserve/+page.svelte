<section class="flex justify-center items-center py-12">
  <div class="flex flex-wrap -mx-4">
    <div class="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
      <div class="max-w-xl mx-auto py-6 px-4 bg-white rounded shadow-md">
        <h2 class="text-2xl font-bold mb-4 text-center">Reserve a Table</h2>
        <form>
          <div class="mb-4">
            <input class="w-full px-3 py-2 border rounded text-gray-700" placeholder="Party Name" type="text" />
          </div>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <input class="w-full px-3 py-2 border rounded text-gray-700" placeholder="Phone Number" type="tel" />
            <input class="w-full px-3 py-2 border rounded text-gray-700" placeholder="Email" type="email" />
          </div>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <input class="w-full px-3 py-2 border rounded text-gray-700" placeholder="Select Date" type="date" />
            <input class="w-full px-3 py-2 border rounded text-gray-700" placeholder="Select Time" type="time" />
          </div>
          <div class="mb-4">
            <select class="w-full px-3 py-2 border rounded text-gray-700">
              {#each [1, 2, 3, 4, 5, 6, 7, 8, 9] as number (number)}
                <option value={number}>{number}</option>
              {/each}
              <option value="10+" disabled>10+ | Please contact Game Day Grill</option>
            </select>
          </div>
          <div class="mb-4">
            <input class="w-full px-3 py-2 border rounded text-gray-700" placeholder="Special Requests" type="text" />
          </div>
          <div class="space-y-4 mb-4">
            <div class="flex items-center">
              <input class="mr-2" id="bosterseat" type="checkbox" name="bosterseat" />
              <label for="bosterseat">Kids Booster Seat Request</label>
            </div>
            <div class="flex items-center">
              <input class="mr-2" id="alergies" type="checkbox" name="alergies" />
              <label for="alergies">Alergies</label>
            </div>
            <div class="flex items-center">
              <input class="mr-2" id="vegan" type="checkbox" name="vegan" />
              <label for="vegan">Vegan</label>
            </div>
            <div class="flex items-center">
              <input class="mr-2" id="glutenfree" type="checkbox" name="glutenfree" />
              <label for="glutenfree">Gluten Free</label>
            </div>
          </div>
          <button class="w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600" type="submit"> Reserve Now </button>
        </form>
      </div>
    </div>
    <div class="w-full lg:w-1/2 px-4">
      <div class="grid grid-cols-2 gap-4">
        <!-- Replace with your images -->
        <img src="image1.jpg" alt="Event 1" class="w-full h-32 object-cover rounded-md shadow" />
        <img src="image2.jpg" alt="Event 2" class="w-full h-32 object-cover rounded-md shadow" />
        <img src="image3.jpg" alt="Event 3" class="w-full h-32 object-cover rounded-md shadow" />
        <img src="image4.jpg" alt="Event 4" class="w-full h-32 object-cover rounded-md shadow" />
      </div>
    </div>
  </div>
</section>
