---
title: "액터 간 통신"
lesson: 2
chapter: 2
date: "22/03/2019"
programming_language:  "javascript"
type: "lesson"
language: ko_kr
tags:
    - getting-started
    - nact
    - javascript
    - nodejs
---

단일 액터 혼자서는 존재 의미가 없습니다. 액터는 협동을 해야합니다. `dispatch` 함수를 사용해서 액터에서 다른 액터로 메시지를 보낼 수 있습니다.

`dispatch` 함수의 3번째 인자는 **메시지 송신자**를 가리킵니다. 이 파라미터가 있음으로 해서 액터의 메시지 핸들러 함수를 작성할 때, 받은 메시지에 대해 응답을 보낼 액터를 명시적으로 지정할 필요가 없습니다. 대신 `msg.sender`를 통해서 송신자 액터를 참조할 수 있습니다.

아래 예제에서, `ping`, `pong` 두 액터가 각각 'ping', 'pong' 메시지를 보내며 핑퐁게임을 하고 있습니다. 게임을 시작하기 위해 `pong` 액터가 `ping` 액터에게 메시지를 보내고, `ping` 액터는 `msg.sender`로 `pong` 액터를 참조해서 역시 `pong` 액터에게 응답 메시지를 보냅니다.

```javascript
const delay = (time) => new Promise((res) => setTimeout(res, time))

const ping = spawnStateless(system, async (msg, ctx) =>  {
  console.log(msg.value)
  // ping: Pong is a little slow. So I'm giving myself a little handicap :P
  await delay(500)
  dispatch(msg.sender, {value: ctx.name, sender: ctx.self});
}, 'ping')

const pong = spawnStateless(system, (msg, ctx) =>  {
  console.log(msg.value);
  dispatch(msg.sender, {value: ctx.name, sender: ctx.self});
}, 'pong')

dispatch(ping, { sender: pong, value: 'begin' });
```

콘솔에는 다음과 같이 출력됩니다.

```
begin
ping
pong
ping
pong
ping
...
```
