module todolist_addr::chat {
  use std::string::{Self, String};
  use aptos_std::table::{Self, Table};
  use aptos_framework::event;
  use aptos_framework::account;
  use std::signer;
  use std::vector;
  use std::debug::print;
  use aptos_framework::randomness;

  const NO_BOTTLE_LIST : u64 = 0;

  struct BottleList has key {
    bottles: Table<u64, Bottle>,
    set_bottle_event: event::EventHandle<Bottle>,
    bottle_counter: u64,
  }



  struct Bottle has store, drop, copy {
    owner: address,
    bottle_id: u64,
    label: u64,
    content: String,
    star_counter: u64,
    star_list: vector<address>,
    completed: bool,
    reply_counter: u64,
    reply_list: vector<Reply>,
    environmental_value: u16
  }

  struct Reply has store, drop, copy {
    content: String,
    address: address,
  }

  struct GlobalBottleAddressList has key {
    lists: vector<address>,
  }

   struct GlobalBottleList has key {
    lists: vector<Bottle>
  }

  // public entry fun init_address_list (account: &signer) {
    
  //   // let address_list = GlobalBottleAddressList {
  //   //   lists: vector::empty<address>(),
  //   // };

  //   let global_bottle_list = borrow_global_mut<GlobalBottleList>(@0x6cc1fcfea6460e857894a8f8fd550d667efbc1730ccf02d5485a2d694087ac92);
  //   vector::push_back(&mut global_bottle_list.lists, vector::empty<Bottle>());
    
  //   // move_to(account, address_list);
  // }

//   public fun get_global_bottle_list(): vector<Bottle> {
//     let global_bottle_list = borrow_global<GlobalBottleList>(@0x6cc1fcfea6460e857894a8f8fd550d667efbc1730ccf02d5485a2d694087ac9);
//     global_bottle_list.lists
// }


  public entry fun init_bottle_list (account: &signer) {
    
    let bottles_holder = BottleList {
      bottles: table::new(),
      set_bottle_event: account::new_event_handle<Bottle>(account),
      bottle_counter: 0
    };
    move_to(account, bottles_holder);
  }

  #[view]
  public fun get_bottle_record(account :address, task_id: u64):  String  acquires BottleList{
    let bottle_list =  borrow_global_mut<BottleList>(account);

    let bottle_record = table::borrow(&mut bottle_list.bottles, task_id);

    bottle_record.content
  }

  public fun add_address (addr: address, user_address: address) acquires GlobalBottleAddressList {
    let lists = &mut borrow_global_mut<GlobalBottleAddressList>(addr).lists;
    vector::push_back(lists, user_address);
  }

  #[randomness]
  entry fun create_bottle (account :&signer, content: String, label: u64, ) acquires BottleList {
    let signer_address = signer::address_of(account);

    assert!(exists<BottleList>(signer_address), NO_BOTTLE_LIST);

    // if(!exists<BottleList>(signer_address)) {
    //   init_bottle_list(account);
    // };

    let bottle_lists = borrow_global_mut<BottleList>(signer_address);

    let counter = bottle_lists.bottle_counter + 1;
    let environmental_value = get_environmental_value();

    let new_bottle = Bottle {
      bottle_id: counter,
      owner: signer_address,
      label,
      content,
      star_counter: 0,
      star_list: vector::empty<address>(),
      completed: false,
      reply_counter: 0,
      reply_list: vector::empty<Reply>(),
      environmental_value
    };

    table::upsert(&mut bottle_lists.bottles, counter, new_bottle);
    bottle_lists.bottle_counter = counter;
    event::emit_event<Bottle>(
      &mut borrow_global_mut<BottleList>(signer_address).set_bottle_event,
      new_bottle
    );
    
  }

  fun get_environmental_value():u16 {
      randomness::u16_integer()
    }

  public entry fun star_bottle (star_user: &signer, account: address, bottle_id: u64, ) acquires BottleList {
    // let signer_address = signer::address_of(account);
    let star_user_signer_address = signer::address_of(star_user);


    let bottle_list = borrow_global_mut<BottleList>(account);

    let bottle_record = table::borrow_mut(&mut bottle_list.bottles, bottle_id);

    // assert!(!vector::contains(&bottle_record.star_list, &star_user_signer_address), 5);

    bottle_record.star_counter =  bottle_record.star_counter + 1;

    vector::push_back(&mut bottle_record.star_list, star_user_signer_address);

  }

  public entry fun reply_bottle (reply_user: &signer, account: address, bottle_id: u64,  content: String) acquires BottleList {
    let reply_user_signer_address = signer::address_of(reply_user);

    let bottle_list = borrow_global_mut<BottleList>(account);

    let bottle_record = table::borrow_mut(&mut bottle_list.bottles, bottle_id);

    bottle_record.reply_counter =  bottle_record.reply_counter + 1;

    vector::push_back(&mut bottle_record.reply_list, Reply {
      content,
      address: reply_user_signer_address
    });


  }


  #[test(admin = @0x123, )]
  fun test_flow(admin : &signer,) acquires BottleList {
      let signer_address = signer::address_of(admin);
      account::create_account_for_test(signer_address);
      let owner  = @0x000;
      // init_address_list(admin);

      // let address_list =  borrow_global<GlobalBottleAddressList>(@0x6274eccc3877873ef4cfbbfccb6c95723154db94d483c1113507f8186c3d2303);

      // print(address_list);
      // init_bottle_list(admin);


      create_bottle(admin, string::utf8(b"New Bottle"), 1);

      // add_address(@0x000, @0x123);

      // let address_list =  borrow_global<GlobalBottleAddressList>(@0x000);

      // print(address_list);

      // let owner :address = @0x123;
      // let bottle_list =  borrow_global<BottleList>(@0x123);
      // print(bottle_list);

      // let bottle_record = table::borrow(&bottle_list.bottles, 1);
      // print(bottle_record);

      // star_bottle(admin, owner, 1 );




      // add_address(@0x000, @0x1234);
      // add_address(@0x000, @0x12345);
      // add_address(@0x000, @0x123456);


      // let address_list =  borrow_global<GlobalBottleAddressList>(@0x000);

      // print(address_list);


      // get_bottle_list(signer_address);



      // print(&bottle_list);
      // init_bottle_list(admin);


      // let bottle_count = event::counter(&borrow_global<BottleList>(signer_address).set_bottle_event);
      // assert!(bottle_count == 1, 4);

      // let bottle_list = borrow_global<BottleList>(signer_address);
      // assert!(bottle_list.bottle_counter == 1, 5);

      // let bottle_record = table::borrow(&bottle_list.bottles, bottle_list.bottle_counter);

      // assert!(bottle_record.bottle_id == 1, 6);
      // assert!(bottle_record.completed == false, 7);
      // assert!(bottle_record.content == string::utf8(b"New Bottle"), 8);
      // assert!(bottle_record.owner == signer_address, 9);


  }

  // #[test(user = @0x6274eccc3877873ef4cfbbfccb6c95723154db94d483c1113507f8186c3d2303)]
  // fun test_star_flow() acquires  GlobalBottleAddressList {
  //   let user = @0x31315296106038598ecf443e6b0b6141dadc1828104ecf86b720f8d4f09dd89;
  //   // let bottle_list =  borrow_global<BottleList>(user);
  //   // print(bottle_list);

  //   let address_list =  borrow_global<GlobalBottleAddressList>(user);

  //   print(address_list);
  //     // let admin :address = @0x123;
  //     // let bottle_list =  borrow_global<BottleList>(admin);
  //     // print(bottle_list);
  //     // let signer_address = signer::address_of(&admin);
  //     // account::create_account_for_test(signer_address);


  //     // let bob_signer_address = signer::address_of(bob);
  //     // account::create_account_for_test(bob_signer_address);
  //     // star_bottle(admin, 1, bob);

  //     // let bottle_list = borrow_global<BottleList>(signer_address);
  //     // assert!(bottle_list.bottle_counter == 1, 8);
  //     // let bottle_record = table::borrow(&bottle_list.bottles, bottle_list.bottle_counter);
  //     // assert!(bottle_record.star_counter == 1, 9);
  //     // print(&bottle_record.star_list);
  //     // assert!(vector::contains(&bottle_record.star_list, &bob_signer_address), 10);


  //     // reply_bottle(owner, 1, bob, string::utf8(b"New Reply"));

  //     // let bottle_list = borrow_global<BottleList>(signer_address);
  //     // let bottle_record = table::borrow(&bottle_list.bottles, bottle_list.bottle_counter);
  //     // assert!(bottle_record.reply_counter == 1, 11);
  //     // print(&bottle_record.reply_list);
  //     // assert!(vector::contains(&bottle_record.reply_list, bob_signer_address), 12);

  // }

}