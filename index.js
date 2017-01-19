function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target')
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
  for(let i = 0; i < rankedLists.length; i++) {
    let lis = rankedLists[i].children
    for(let k = 0; k < lis.length; k++) {
      lis[k].innerHTML = parseInt(lis[k].innerHTML) + n
    }
  }
}

function deepestChild() {
  let node = document.querySelector('#grand-node')
  let nextNode = node.children[0]

  // for(let i = 0; i < Object.keys(nextNode).length; i++) {
    while(nextNode != null) {
      node = nextNode
      nextNode = node.children[0]
    }
  // }

  return node

}
