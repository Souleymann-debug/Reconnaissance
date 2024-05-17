import pytesseract
import cv2

# Chemin d'accès au document d'identité
PATH_TO_IMG = './test_images/cni_fr_1.jpg'

# OCR EXTRACTION
image = cv2.imread(PATH_TO_IMG)
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
text = pytesseract.image_to_string(gray)
print(text)

# PHOTO EXTRACTION
face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=10, minSize=(30, 30))
for (x, y, w, h) in faces:
    cv2.rectangle(image, (x-10, y-40), (x+w+10, y+h+40), (0, 0, 255), 2)

cv2.imshow("ID", image)
cv2.waitKey(0)
cv2.destroyAllWindows()
