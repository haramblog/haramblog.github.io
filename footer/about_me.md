# 1. 마크다운이 되는지 테스트 하겠습니다.

마크다운은 **재밌습니다.**. 마크다운은 ~~재미 없습니다.~~ 마크다운은 **재밌습니다.**. 마크다운은 ~~재미 없습니다.~~ 마크다운은 **재밌습니다.**. 마크다운은 ~~재미 없습니다.~~ 마크다운은 **재밌습니다.**. 마크다운은 ~~재미 없습니다.~~ 마크다운은 **재밌습니다.**. 마크다운은 ~~재미 없습니다.~~ 마크다운은 **재밌습니다.**. 마크다운은 ~~재미 없습니다.~~ 마크다운은 **재밌습니다.**. 마크다운은 ~~재미 없습니다.~~ 마크다운은 **재밌습니다.**. 마크다운은 ~~재미 없습니다.~~ 마크다운은 **재밌습니다.**. 마크다운은 ~~재미 없습니다.~~ 마크다운은 **재밌습니다.**. 마크다운은 ~~재미 없습니다.~~

마크다운은 **재밌습니다.**. 마크다운은 ~~재미 없습니다.~~ 마크다운은 **재밌습니다.**. 마크다운은 ~~재미 없습니다.~~ 마크다운은 **재밌습니다.**. 마크다운은 ~~재미 없습니다.~~ 마크다운은 **재밌습니다.**. 마크다운은 ~~재미 없습니다.~~ 마크다운은 **재밌습니다.**. 마크다운은 ~~재미 없습니다.~~

마크다운은 **재밌습니다.**. 마크다운은 ~~재미 없습니다.~~ 마크다운은 **재밌습니다.**. 마크다운은 ~~재미 없습니다.~~ 마크다운은 **재밌습니다.**. 마크다운은 ~~재미 없습니다.~~ 마크다운은 **재밌습니다.**. 마크다운은 ~~재미 없습니다.~~ 마크다운은 **재밌습니다.**. 마크다운은 ~~재미 없습니다.~~

# 2. 코드 블록도 테스트 해보겠습니다.

```kotlin
import java.io.BufferedReader
import java.io.InputStreamReader
import java.util.*

fun main(args: Array<String>) {
    var br = BufferedReader(InputStreamReader(System.`in`))
    var loop: Int = br.readLine().toInt()
    val arr = Stack<Int>()

    for (i: Int in 1 .. loop) {
        var input: List<String> = br.readLine().split(" ")

        if (input[0] == "push") arr.push(input[1].toInt())
        if (input[0] == "size") println(arr.size)

        if (input[0] == "pop") {
            if (arr.empty()) println(- 1)
            else println(arr.pop())
        }
        if (input[0] == "empty") {
            if (arr.empty()) println(1)
            else println(0)
        }
        if (input[0] == "top") {
            if (arr.empty()) println(- 1)
            else println(arr.peek())
        }
    }
}
```

# 3. 리스트 목록도 연습하겠습니다.

 * 1번 리스트
 * 2번 리스트
