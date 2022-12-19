class ListNode:
    def __init__(self, val):
        self.val = val
        self.next = None

    def __repr__(self):
        return self.val

class Link_list:
    def __init__(self):
        self.head = None   # 初始化为None

    def __iter__(self):   # 有了__iter__，才能iter
        node = self.head
        while node is not None:
            yield node
            node = node.next

    def __repr__(self):  # print能看到的内容
        node = self.head
        nodes = []
        while node:
            nodes.append(node.val)
            node = node.next
        nodes.append("None")
        return " -> ".join(nodes)

    def create_from_array(self, array):
        self.head = ListNode(array[0])
        current_node = self.head    
        for item in array[1:]:
            node =  ListNode(item)
            if node:
                current_node.next = node
                current_node = current_node.next

    def traverse(self):
        node = self.head
        while node.next:     # 遍历就是while node.next
            print (node)
            node = node.next

    def add_first(self, node):    # param node is the input
        node.next = self.head
        self.head = node

    def add_last(self, node): 
        if not self.head:         
            self.head = node
            return
        # for curr in self:
        #     pass
        curr = self.head
        while curr.next:
            curr = curr.next
        curr.next = node

    def add_after(self, new_node, target_node):
        if not self.head:      # 有事没事都检测一下
            raise Exception("list is empty") 

        curr = self.head
        while curr:
            if curr.val == target_node.val:
                new_node.next = curr.next        # 先搭上后面的
                curr.next = new_node
                return
            curr = curr.next

    def remove_node(self, target_node):
        if self.head is None:
            raise Exception("List is empty")

        if self.head.val == target_node.val:
            self.head = self.head.next
            return

        previous_node = self.head
        for node in self:
            if node.val == target_node.val:
                previous_node.next = node.next
                return
            previous_node = node

        raise Exception("Node with data '%s' not found" % target_node_data)



            



llist = Link_list()
print(llist)

first_node = ListNode("z")
llist.head = first_node  # 最开始还是得指定head
print(llist)

second_node = ListNode("b")
third_node  = ListNode("c")

first_node.next = second_node
second_node.next = third_node
print(llist)
#print(llist.traverse())


#print(Link_list.create_from_array([1,2,3,4,5,6]))

for node in llist:
    print(node)

#llist = Link_list()
#llist.add_first(ListNode("b"))

new_head = ListNode('aloha')
llist.add_first(new_head)
print(llist)

last_head = ListNode('mahalo')   # 不管咋样，最后一个node一定是none
llist.add_last(last_head)
print(llist)

print(ListNode('b').val)
llist.add_after(ListNode('yes'), ListNode('b'))
print(llist)


llist.remove_node(ListNode('aloha'))
print(llist)