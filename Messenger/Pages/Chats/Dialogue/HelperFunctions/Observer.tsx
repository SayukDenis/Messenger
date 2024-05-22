interface Subject {
  attach(observer: Observer, callback: () => void): void;
  detachAll(): void;
  notify(): void;
}


export class ConcreteSubject implements Subject {
  public state: number;
  public callback: (dfh: number) => void;

  private observers: Observer[] = [];

 
  public attach(observer: Observer, callback: (dfh: number) => void): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log('Subject: Observer has been attached already.');
    }

    this.observers.push(observer);
    this.callback = callback;
  }

  public detachAll(): void {
    this.observers = []
  }


  public notify(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  public changeDynamicFooterHeight(height: number): void {
    this.state = height;

    this.notify();
  }
}


interface Observer {
  update(subject: Subject): void;
}


export class ConcreteObserver implements Observer {
  public update(subject: Subject): void {
    if (subject instanceof ConcreteSubject) {
      console.log('ConcreteObserver: Reacted to the event.');
      subject.callback(subject.state);
    }
  }
}
