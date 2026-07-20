from rembg import remove
from PIL import Image
input_path = 'public/assets/partners/inflolink.png'
output_path = 'public/assets/partners/inflolink.png'
img = Image.open(input_path)
output = remove(img)
output.save(output_path)
print("Done!")
