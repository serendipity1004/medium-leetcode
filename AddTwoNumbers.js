/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Linked List를 생성하는 함수
let linkedList = function (val, next) {
    this.val = val;
    this.next = next;
};

const addTwoNumbers = function (l1, l2) {
    let curL1 = l1;
    let curL2 = l2;
    // 첫번째 Node
    let original;
    // 제작중인 LinkedList의 현재 Node 값을 들고있을 변수
    let curNode;
    // 올림 적용여부 (raise === true 일경우 +1)
    let raise = false;

    while (curL1 || curL2) {
        // Node의 null 값을 감안해서 만일 null 이면 0을 더해줍니다.
        let l1Val = curL1 && curL1.val ? curL1.val : 0;
        let l2Val = curL2 && curL2.val ? curL2.val : 0;

        let addition = l1Val + l2Val;

        // 전 계선에서 올림값이 있었으면 1을 더해줍니다.
        if (raise) {
            addition += 1;
            raise = false;
        }

        // 만일 덧셈 값이 9보다크면 올림설정을 해주고 Node 값에서 10을 빼줍니다.
        if (addition > 9) {
            raise = true;
            addition -= 10;
        }

        // 첫 노드일경우 original에 저장해둡니다.
        if (!original) {

            original = new linkedList(addition, null);
            curNode = original;

        } else {
            // 첫 Node가 아닐경우 새로운 Node를 생성하고 이전 Node의 next 값에 저장해줍니다
            // 추가적으로 현재 Node를 새로운 Node로 지정해줍니다.
            const newNode = new linkedList(addition, null);

            curNode.next = newNode;

            curNode = newNode;
        }

        // 각 Linked List의 현재 Node를 next 값으로 변경해주는 작업입니다.
        curL1 = curL1 && curL1.next ? curL1.next : null;
        curL2 = curL2 && curL2.next ? curL2.next : null;
    }

    // 두 Linked List의 길이를 넘는 올림값이 있을경우 새로운 노드를 붙여줍니다.
    if (raise) {
        curNode.next = new linkedList(1, null);
    }

    return original;
};

function ListNode(val, next) {
    this.val = val;
    this.next = next;
}

function example() {
    const linkedList =
        new ListNode(1,
            new ListNode(3,
                new ListNode(5,
                    new ListNode(7, null))));

    // node1
    console.log(linkedList.val);  // 1
    // node2
    console.log(linkedList.next.val);  // 3
    // node3
    console.log(linkedList.next.next.val);  // 5
    // node4
    console.log(linkedList.next.next.next.val);  // 7
}

example();


// console.log(addTwoNumbers(new ListNode(2, new ListNode(4, new ListNode(3, null))),
//     new ListNode(5, new ListNode(6, new ListNode(4, null)))));

console.log(addTwoNumbers(new ListNode(1, new ListNode(8, null)),
    new ListNode(0, null)),
);