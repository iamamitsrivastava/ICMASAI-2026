from PIL import Image

def remove_white_bg(img_path, out_path, threshold=240):
    try:
        img = Image.open(img_path)
        img = img.convert("RGBA")
        datas = img.getdata()

        new_data = []
        for item in datas:
            # Change all white (also shades of whites) to transparent
            if item[0] >= threshold and item[1] >= threshold and item[2] >= threshold:
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append(item)

        img.putdata(new_data)
        img.save(out_path, "PNG")
        print("Success")
    except Exception as e:
        print(f"Error: {e}")

remove_white_bg("public/assets/partners/inflolink.png", "public/assets/partners/inflolink.png")
