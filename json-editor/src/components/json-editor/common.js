/**
 * Created by 30113 on 2018/4/24.
 */
export function formatJson(jsonStr) {
    var string = jsonStr
    var result = '',
        pos = 0,
        prevChar = '',
        outOfQuotes = true;
    for (var i = 0; i < string.length; i++) {
        var char = string.substring(i, i + 1)
        if (char == '"' && prevChar != '\\') {
            outOfQuotes = !outOfQuotes
        } else if ((char == '}' || char == ']') && outOfQuotes) {
            result += "\n"
            pos--
            for (var j = 0; j < pos; j++) result += '  '
        }
        result += char
        if ((char == ',' || char == '{' || char == '[') && outOfQuotes) {
            result += "\n"
            if (char == '{' || char == '[') pos++
            for (var j = 0; j < pos; j++) result += '  '
        }
        prevChar = char
    }
    return result
}

export function getType(data) {
    let type = typeof(data)
    if (type === 'object' && data instanceof Array) {
        type = 'array'
    }
    return type
}
