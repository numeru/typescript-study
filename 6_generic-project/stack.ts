{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  };

  class StackImpl<T> implements Stack<T> {
    constructor(private capacity: number) {}

    private _size: number = 0;
    private head?: StackNode<T>;
    get size() {
      return this._size;
    }

    push(value: T) {
      if (this._size === this.capacity) {
        throw new Error("Stack is full");
      }
      const node = { value, next: this.head };
      this.head = node;
      this._size++;
    }

    pop(): T {
      if (this.head == null) {
        throw new Error("Stack is empty");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl<string>(10);
  stack.push("ss");
  stack.pop();

  const stack2 = new StackImpl<number>(10);
  stack2.push(2);
  stack2.pop;
}
