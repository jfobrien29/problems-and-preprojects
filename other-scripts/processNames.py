def readInNames():
    names = []
    f = open('names.txt', 'r')
    for line in f:
        name = line[line.find('.')+1:].strip()
        names.append(name)
    
    f.close()

    names.reverse()
    return names

def createShirtLines(names, maxLength):
    shirtLines = []
    currentLine = ""
    for name in names:
        if len(currentLine) is 0:
            currentLine = name
        elif len(currentLine) + len(name) + 3 <= maxLength:
            currentLine = currentLine + ' - ' + name
        else:
            shirtLines.append(currentLine)
            currentLine = name

    shirtLines.append(currentLine)
    return shirtLines



MAX_LINE_LENGTH = 100
names = readInNames()
shirtLines = createShirtLines(names, MAX_LINE_LENGTH)

for line in shirtLines:
    print(line)